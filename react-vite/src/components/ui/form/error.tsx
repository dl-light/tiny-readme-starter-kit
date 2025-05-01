
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

type ErrorProps = {
  errorMessage?: string;
};

export const Error = ({ errorMessage }: ErrorProps) => {
  if (!errorMessage) {
    return null;
  }

  return (
    <div className="mt-1.5 flex items-center gap-1 text-sm text-red-600" role="alert">
      <ExclamationCircleIcon className="h-4 w-4" />
      <span>{errorMessage}</span>
    </div>
  );
};
