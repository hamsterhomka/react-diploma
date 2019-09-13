import { useEffect } from 'react';
import { setCatalogNeedsScroll } from '../actions/catalogActions';

export default function useScroll(needScroll, dispatch) {
  useEffect(() => {
    if (needScroll) {
      document.getElementById('catalog-h').scrollIntoView({ block: 'start', behavior: 'smooth' });
      dispatch(setCatalogNeedsScroll(false));
    }
  }, [needScroll]);
}
