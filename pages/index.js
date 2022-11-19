import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Homepage</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                vel. Obcaecati consequatur distinctio, dicta nam eius,
                dignissimos cupiditate alias recusandae cumque dolorem
                consectetur blanditiis. Possimus saepe veniam qui libero eius.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                vel. Obcaecati consequatur distinctio, dicta nam eius,
                dignissimos cupiditate alias recusandae cumque dolorem
                consectetur blanditiis. Possimus saepe veniam qui libero eius.
            </p>
            <Link href='/ninjas'>See Ninja Listing</Link>
        </div>
    );
}
