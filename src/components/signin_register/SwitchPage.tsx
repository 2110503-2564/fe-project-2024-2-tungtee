'use client';

import { useRouter } from 'next/navigation';

interface SwitchPageProps {
  title: string;
  pageRef?: string;
}

export default function SwitchPage({ title, pageRef = "/sign-in" }: SwitchPageProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(pageRef);
  };

  return (
    <button
      onClick={handleClick}
      className="text-white underline hover:text-gray-300 transition-all"
    >
      {title}
    </button>
  );
}
