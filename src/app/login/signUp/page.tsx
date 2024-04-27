import { Form } from './Form';

export default function SignUp() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-2 ">
      <div className="flex flex-col items-center mt-10 p-10 shadow-md border-solid border-2 border-gray-600 rounded-md">
        <h1 className="mt-10 mb-4 text-4xl font-bold">Регистрация</h1>
        <Form />
      </div>
    </div>
  );
}
