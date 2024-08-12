import { saveAs } from 'file-saver';
import JSZip from 'jszip';

import { templateReturnType } from '../svgs/instaTemplates';

const createCanvasUrl = (image: HTMLImageElement) => {
  // Create a Canvas element
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  // Set canvas dimensions to match SVG
  canvas.width = image.width;
  canvas.height = image.height;

  // Draw the image on the canvas
  context?.drawImage(image, 0, 0);

  // Convert the canvas content to PNG
  const pngData = canvas.toDataURL('image/png');

  return pngData;
};

const loadImage = (dataUrl: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(createCanvasUrl(img));
    img.onerror = (error) => reject(error);
    img.src = dataUrl;
  });
};

const createPngDataUrl = async (svgElement: templateReturnType) => {
  // Create a Blob from the SVG content
  const blob = new Blob([svgElement.instaTemplate as unknown as BlobPart], { type: 'image/svg+xml' });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);
  const pngDataUrl = await loadImage(url);
  return {
    imageName: svgElement.name,
    pngDataUrl,
  };
};
export const downloadZip = async (svgsArr: templateReturnType[]) => {
  const zip = new JSZip();
  const promiseQueue = [];

  for await (const svgElement of svgsArr) {
    promiseQueue.push(createPngDataUrl(svgElement));
  }

  const result = await Promise.all(promiseQueue);

  // Add PNGs to ZIP
  result.forEach((eachImage) => {
    const pngUrl = eachImage.pngDataUrl as string;
    zip.file(`${eachImage.imageName}.png`, pngUrl.split(',')[1], { base64: true });
  });

  // Generate ZIP and trigger download
  zip.generateAsync({ type: 'blob' }).then((content) => {
    saveAs(content, 'technicalIndicators.zip');
    console.log('Downloaded', content);
  });
};
