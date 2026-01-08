import { FC } from "react";

export const DevelopmentBoard: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-gray-600">
      <h1 className="text-3xl font-bold mb-4">🚧 Страница в разработке</h1>
      <p className="text-lg max-w-md">
        Эта часть приложения ещё не готова. Пожалуйста, зайдите позже.
      </p>
    </div>
  );
};
