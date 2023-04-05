import Link from 'next/link';
import Meta from '@/components/Meta';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function NotFound() {
  const timeout = 15;

  const [counter, setCounter] = useState(timeout);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, timeout * 1000);
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <Meta
        title="Next MJ | 404"
        keywords="Next MJ | 404"
        description="Next MJ | 404"
      />
      <div>
        <h1>Oooops..</h1>
        <h2>That page cannot be found</h2>
        <h2>Napraviti neku da grmi</h2>
        <p>
          Go back to the <Link href={'/'}>Homepage</Link>, or you will be
          redirected in {counter} seconds.
        </p>
      </div>
    </>
  );
}

export default NotFound;
