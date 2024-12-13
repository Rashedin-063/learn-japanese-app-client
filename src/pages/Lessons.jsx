import { Helmet } from "react-helmet-async";
import useLoadLessons from './../hooks/useLoadLessons';
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import PageTitle from "../components/PageTitle";

const Lessons = () => {
  const [lessons, refetch, isLoading, isError, error] = useLoadLessons();

  // console.log(lessons)
  

  // handling loading and error
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <>
      <Helmet>
        <title>Learn Japanese || Lessons</title>
      </Helmet>
      <PageTitle title='All Lessons' />
    </>
  );
}
export default Lessons