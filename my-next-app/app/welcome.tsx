import Image from "next/image";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Application!</h1>
      <p className="text-lg text-center mb-8">
        We are glad to have you here. Explore and enjoy our features.
      </p>
      <Image
        src="/welcome-image.svg"
        alt="Welcome image"
        width={300}
        height={200}
      />
    </div>
  );
} 