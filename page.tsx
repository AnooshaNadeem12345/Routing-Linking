'use client'
import Image from "next/image";
import Link from "next/link"
import {useRouter} from 'next/navigation';
export default function Home() {
  const route = useRouter()
  return (
    <>
    <h1>Homepage</h1>
    {/* <Link href={'/about'}><h1>Go To About Page</h1></Link> */}
    <Link href={'/navbar'}><h1>Go To Nav Bar Page</h1></Link>
    <Link href={'/contact'}><h1>Go To Contact Page</h1></Link>
    <Link href={'/footer'}><h1>Go To Footer Page</h1></Link>
    <button onClick={() => route.push('/about')}>Go To About Page</button>
    </>
  );
}  
    