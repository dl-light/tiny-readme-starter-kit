
import { ContentLayout } from '@/components/layouts';
import { useUser } from '@/lib/auth';
import { ROLES } from '@/lib/authorization';

const DashboardRoute = () => {
  const user = useUser();
  const firstName = user.data?.firstName || 'User';
  const lastName = user.data?.lastName || '';
  const role = user.data?.role || '';

  return (
    <ContentLayout title="Dashboard">
      <h1 className="text-xl">
        Welcome <b>{`${firstName} ${lastName}`}</b>
      </h1>
      <h4 className="my-3">
        Your role is : <b>{role}</b>
      </h4>
      <p className="font-medium">In this application you can:</p>
      {role === ROLES.USER && (
        <ul className="my-4 list-inside list-disc">
          <li>Create comments in discussions</li>
          <li>Delete own comments</li>
        </ul>
      )}
      {role === ROLES.ADMIN && (
        <ul className="my-4 list-inside list-disc">
          <li>Create discussions</li>
          <li>Edit discussions</li>
          <li>Delete discussions</li>
          <li>Comment on discussions</li>
          <li>Delete all comments</li>
        </ul>
      )}
    </ContentLayout>
  );
};

export default DashboardRoute;
