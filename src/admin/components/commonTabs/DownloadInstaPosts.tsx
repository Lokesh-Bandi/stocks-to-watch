import { downloadZip } from '../../../components/download/zip';
import { getTechnicalIndicatorsInstaPosts } from '../../../instaPosts/instatemplateGeneration';
import { UpdateButton } from '../updateButton/UpdateButton';

export const DownloadInstaPosts = () => {
  const BUTTON_NAME = 'Download Insta Posts';
  const handleDownloadClick = () => {
    const imagesToBeDownloaded = getTechnicalIndicatorsInstaPosts();
    downloadZip(imagesToBeDownloaded);
  };
  return (
    <>
      <UpdateButton title={BUTTON_NAME} onClick={handleDownloadClick} />
    </>
  );
};
