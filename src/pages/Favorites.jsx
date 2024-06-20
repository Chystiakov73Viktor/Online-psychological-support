import { Section } from 'components/Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import Placeholder from '../components/Placeholder/Placeholder';
import { Filter } from 'components/Filter/Filter';
import { CardMarkupList } from '../components/CardMarkupList/CardMarkupList';
import { filterPsychologists } from '../redux/filter/operations';
import { selectPsychologistIsLoading } from '../redux/psychologists/selects';
import { selectFilteredFavorites } from '../redux/filter/selects';
import { selectFavorites } from '../redux/favorites/selects';

function Favorites() {
  const dispatch = useDispatch();
  const filteredFavoritesData = useSelector(selectFilteredFavorites);
  const favoritesData = useSelector(selectFavorites);
  const isLoading = useSelector(selectPsychologistIsLoading);

  const itemsPerPage = 3;

  // Викликати filterPsychologists для початкового фільтра
  useEffect(() => {
    dispatch(filterPsychologists({ filter: '', type: 'favorites' }));
  }, [dispatch, favoritesData]); // Викликати при зміні favoritesData

  const renderCardList = paginatedData => {
    return <CardMarkupList dataCard={paginatedData} />;
  };

  const handleFilterChange = filter => {
    dispatch(filterPsychologists({ filter, type: 'favorites' }));
  };

  return (
    <Section className="carsListSection" titleClassName="titleCatalog">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {Array.isArray(filteredFavoritesData) &&
          filteredFavoritesData.length !== 0 ? (
            <>
              <Filter onFilterChange={handleFilterChange} />
              <Pagination
                data={filteredFavoritesData}
                itemsPerPage={itemsPerPage}
                renderCardList={renderCardList}
              />
            </>
          ) : (
            <Placeholder />
          )}
        </>
      )}
    </Section>
  );
}

export default Favorites;

// import { Section } from 'components/Section/Section';
// import { useDispatch, useSelector } from 'react-redux';
// import { Loader } from 'components/Loader/Loader';
// import Pagination from 'components/Pagination/Pagination';
// import Placeholder from '../components/Placeholder/Placeholder';
// import { Filter } from 'components/Filter/Filter';
// import { CardMarkupList } from '../components/CardMarkupList/CardMarkupList';
// import { filterPsychologists } from '../redux/filter/operations';
// import { selectPsychologistIsLoading } from '../redux/psychologists/selects';
// import { selectFilteredFavorites } from '../redux/filter/selects';
// import { selectFavorites } from '../redux/favorites/selects';

// function Favorites() {
//   const dispatch = useDispatch();
//   const filteredFavoritesData = useSelector(selectFilteredFavorites);
//   const data =  useSelector(selectFavorites);
//   console.log('data: ', data);
//   console.log('filteredFavoritesData : ', filteredFavoritesData );
//   const isLoading = useSelector(selectPsychologistIsLoading);

//   const itemsPerPage = 3;

//   const renderCardList = paginatedData => {
//     return <CardMarkupList dataCard={paginatedData} />;
//   };

//   const handleFilterChange = (filter) => {
//     dispatch(filterPsychologists({ filter, type: 'favorites' }));
//   };

//   return (
//     <Section className="carsListSection" titleClassName="titleCatalog">
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           {Array.isArray(filteredFavoritesData) && filteredFavoritesData.length !== 0 ? (
//             <>
//               <Filter onFilterChange={handleFilterChange} />
//               <Pagination
//                 data={filteredFavoritesData}
//                 itemsPerPage={itemsPerPage}
//                 renderCardList={renderCardList}
//               />
//             </>
//           ) : (
//             <Placeholder />
//           )}
//         </>
//       )}
//     </Section>
//   );
// }

// export default Favorites;
