import { Code, Github, Link, Linkedin } from 'lucide-react';
import React from 'react';

const styles = {
    footer: 'text-center p-4 bg-red-500 text-white',
    linkContainer: 'space-x-4 flex justify-center',
    link: 'hover:underline',
    copyright: 'mt-4'
};

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.linkContainer}>
                <a href="https://www.linkedin.com/in/josbor/" target="_blank" rel="noopener noreferrer" className={styles.link}><Linkedin /></a>
                <a href="https://github.com/Josbor" target="_blank" rel="noopener noreferrer" className={styles.link}><Github /></a>
                <a href="https://jose-borrego-dev.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.link}><Link /></a>
                <a href="https://github.com/josbor/pokemon-app" target="_blank" rel="noopener noreferrer" className={styles.link}><Code /></a>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Jose Borrego
            </div>
        </footer>
    );
};

export default Footer;