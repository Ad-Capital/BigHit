'use client';

import styles from './page.module.scss';
import ZoomParallax from '@/components/ZoomParallax';
import { Headline, Personal, Offers } from '@/components';
import { Contact } from '@/sections';

export default function Home() {

    return (
        <main className={styles.main}>
            <ZoomParallax />
            <Headline />
            <Personal />
            <Offers />
            <Contact />
        </main>
    );
}