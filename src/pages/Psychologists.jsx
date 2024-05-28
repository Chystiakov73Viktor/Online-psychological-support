import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "components/Section/Section";
import { Loader } from "components/Loader/Loader";
import Pagination from "components/Pagination/Pagination";
import { CardMarkupList } from "components/CardMarkupList/CardMarkupList";
import { selectPsychologistData, selectPsychologistIsLoading } from "../redux/psychologists/selects";
import { getPsychologists } from "../redux/psychologists/operations";
import { Filter } from "../components/Filter/Filter";
import { filterPsychologists } from "../redux/filter/operations";
import { selectFilteredPsychologistData } from "../redux/filter/selects";

function Psychologists() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectPsychologistIsLoading);
  const data = useSelector(selectPsychologistData);
  const filteredData = useSelector(selectFilteredPsychologistData);

  const itemsPerPage = 3;

  useEffect(() => {
    dispatch(getPsychologists());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterPsychologists({ filter: '', type: 'psychologists' }));
  }, [data, dispatch]);

  const handleFilterChange = (filter) => {
    dispatch(filterPsychologists({ filter, type: 'psychologists' }));
  };

  const renderCardList = (paginatedData) => {
    return <CardMarkupList dataCard={paginatedData} />;
  };

  return (
    <Section className="psychologistsSection" titleClassName="titlePsychologists">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data && data.length !== 0 && (
            <>
              <Filter onFilterChange={handleFilterChange} />
              <Pagination
                data={filteredData}
                itemsPerPage={itemsPerPage}
                renderCardList={renderCardList}
              />
            </>
          )}
        </>
      )}
    </Section>
  );
}

export default Psychologists;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Section } from "components/Section/Section";
// import { Loader } from "components/Loader/Loader";
// import Pagination from "components/Pagination/Pagination";
// import { CardMarkupList } from "components/CardMarkupList/CardMarkupList";
// import { selectPsychologistData, selectPsychologistIsLoading } from "../redux/psychologists/selects";
// import { getPsychologists } from "../redux/psychologists/operations";
// import { Filter } from "../components/Filter/Filter";
// import { filterPsychologists } from "../redux/filter/operations";
// import { selectFilteredPsychologistData } from "../redux/filter/selects";

// function Psychologists() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectPsychologistIsLoading);
//   const data = useSelector(selectPsychologistData);
//   const filteredData = useSelector(selectFilteredPsychologistData);

//   const itemsPerPage = 3;

//   useEffect(() => {
//     dispatch(getPsychologists());
//   }, [dispatch]);

//   useEffect(() => {
//     dispatch(filterPsychologists(''));
//   }, [data, dispatch]);

//   const handleFilterChange = (filter) => {
//     dispatch(filterPsychologists(filter));
//   };

//   const renderCardList = (paginatedData) => {
//     return <CardMarkupList dataCard={paginatedData} />;
//   };

//   return (
//     <Section
//       className="psychologistsSection"
//       titleClassName="titlePsychologists"
//     >
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           {data && data.length !== 0 && (
//             <>
//               <Filter onFilterChange={handleFilterChange} />
//               <Pagination
//                 data={filteredData}
//                 itemsPerPage={itemsPerPage}
//                 renderCardList={renderCardList}
//               />
//             </>
//           )}
//         </>
//       )}
//     </Section>
//   );
// }

// export default Psychologists;
