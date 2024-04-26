'use client';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-red-500 font-medium text-lg">
      <div>Ошибка: </div>

      <div>{error.message}</div>

      <button className="button mt-10" onClick={reset}>
        Попробовать снова
      </button>
    </div>
  );
}
