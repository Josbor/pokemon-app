import { usePokemonDetails } from "../hooks/UsePokemonDetails"
import { Ability } from "../models/Pokemon.model"


interface PokemonDetailProps {
    pokemonName: string | null
}

const classes = {
    container: "bg-white rounded-lg border border-gray-200 shadow-sm h-full flex items-center justify-center min-h-[400px]",
    textCenter: "text-center text-gray-500 p-6",
    loadingText: "text-center p-6",
    errorText: "text-center text-red-500 p-6",
    noDetailsText: "text-center text-gray-500 p-6",
    detailContainer: "bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden",
    header: "bg-red-50 pb-2 px-4 pt-4",
    headerContent: "flex justify-between items-start",
    title: "capitalize text-2xl font-bold",
    typeBadge: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 capitalize",
    idText: "text-sm text-gray-500",
    imageContainer: "flex flex-col items-center mb-4",
    image: "object-contain",
    statsContainer: "grid grid-cols-2 gap-2 mb-4",
    statText: "text-center",
    statLabel: "text-sm text-gray-500",
    statValue: "font-medium",
    statsSection: "space-y-3",
    statsTitle: "font-semibold mb-2",
    statItem: "space-y-1",
    statItemContent: "flex justify-between text-sm",
    statItemLabel: "capitalize",
    statItemValue: "font-medium",
    statBarContainer: "w-full bg-gray-200 rounded-full h-2",
    statBar: "bg-red-500 h-2 rounded-full",
    abilitiesSection: "mt-4",
    abilitiesTitle: "font-semibold mb-2",
    abilityBadge: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 capitalize"
}

export default function PokemonDetail({ pokemonName }: PokemonDetailProps) {
    const { pokemon, isLoading, error } = usePokemonDetails(pokemonName)

    if (!pokemonName) {
        return (
            <div className={classes.container}>
                <div className={classes.textCenter}>Selecciona un Pokémon para ver sus detalles</div>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className={classes.container}>
                <div className={classes.loadingText}>Cargando detalles de {pokemonName}...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className={classes.container}>
                <div className={classes.errorText}>Error al cargar los detalles: {error.message}</div>
            </div>
        )
    }

    if (!pokemon) {
        return (
            <div className={classes.container}>
                <div className={classes.noDetailsText}>No se encontraron detalles para {pokemonName}</div>
            </div>
        )
    }

    return (
        <div className={classes.detailContainer}>
            <div className={classes.header}>
                <div className={classes.headerContent}>
                    <div>
                        <h3 className={classes.title}>{pokemon.name}</h3>
                        <div className="flex gap-1 mt-2">
                            {pokemon.types.map((type) => (
                                <span key={type.type.name} className={classes.typeBadge}>
                                    {type.type.name}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="text-right">
                        <span className={classes.idText}>#{pokemon.id.toString().padStart(3, "0")}</span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className={classes.imageContainer}>
                    {pokemon.sprites.other?.["official-artwork"]?.front_default ? (
                        <img
                            src={pokemon.sprites.other["official-artwork"].front_default || "/placeholder.svg"}
                            alt={pokemon.name}
                            width={200}
                            height={200}
                            className={classes.image}
                        />
                    ) : (
                        <img
                            src={pokemon.sprites.front_default || "/placeholder.svg?height=200&width=200"}
                            alt={pokemon.name}
                            width={120}
                            height={120}
                            className={classes.image}
                        />
                    )}
                </div>

                <div className={classes.statsContainer}>
                    <div className={classes.statText}>
                        <p className={classes.statLabel}>Altura</p>
                        <p className={classes.statValue}>{pokemon.height / 10} m</p>
                    </div>
                    <div className={classes.statText}>
                        <p className={classes.statLabel}>Peso</p>
                        <p className={classes.statValue}>{pokemon.weight / 10} kg</p>
                    </div>
                </div>

                <div className={classes.statsSection}>
                    <h3 className={classes.statsTitle}>Estadísticas</h3>
                    {pokemon.stats.map((stat: { stat: { name: string }; base_stat: number }) => (
                        <div key={stat.stat.name} className={classes.statItem}>
                            <div className={classes.statItemContent}>
                                <span className={classes.statItemLabel}>{stat.stat.name.replace("-", " ")}</span>
                                <span className={classes.statItemValue}>{stat.base_stat}</span>
                            </div>
                            <div className={classes.statBarContainer}>
                                <div
                                    className={classes.statBar}
                                    style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={classes.abilitiesSection}>
                    <h3 className={classes.abilitiesTitle}>Habilidades</h3>
                    <div className="flex flex-wrap gap-1">
                        {pokemon.abilities.map((ability:Ability) => (
                            <span key={ability.ability.name} className={classes.abilityBadge}>
                                {ability.ability.name.replace("-", " ")}
                                {ability.is_hidden && " (oculta)"}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
