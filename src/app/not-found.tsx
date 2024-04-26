import BreadCrumbs from '@/shared/ui/BreadCrumbs/BreadCrumbs';
import pageNotFoundImg from '../../public/pageNotFound.jpg';

export default function NotFound() {
  return (
    <div className="flex justify-center items-center">
      <BreadCrumbs />
      <img className="w-4/5" src={pageNotFoundImg.src} alt="not found" />
    </div>
  );
}
