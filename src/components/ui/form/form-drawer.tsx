
export type FormDrawerProps = {
  triggerButton: React.ReactElement;
  title: string;
  children: React.ReactNode;
  submitButton: React.ReactElement;
  isDone: boolean;
};

export const FormDrawer = ({
  triggerButton,
  title,
  children,
  submitButton,
  isDone,
}: FormDrawerProps) => {
  return (
    <div>
      {triggerButton}
      <div className="p-4 border rounded-md shadow">
        <h2>{title}</h2>
        {children}
        {submitButton}
      </div>
    </div>
  );
};
