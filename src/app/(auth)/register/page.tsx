import NotImplementsComponent from '@/components/error/not-implementes';
import Link from 'next/link';
import Button from '@/components/ui/button';

export default function NotImplements() {
    return (
        <div>
            <div className='flex justify-center'>
            <Button className='bg-black text-white font-bold py-2 px-4 rounded'>
                <Link href="/">
                    <button>Voltar para Login</button>
                </Link>
            </Button>
            </div>
            <NotImplementsComponent />
        </div>
    );
}