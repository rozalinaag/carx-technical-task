'use client';

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="text-red-500 font-medium text-lg">
      {error.message}
    </div>
  );
}
