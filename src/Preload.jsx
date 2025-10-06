import { useEffect } from "react";

export default function PreloadAllImages({hasFinished, setFinish}) {
  useEffect(() => {
    console.log("Preloading images...");
    let isCancelled = false;

    fetch("/images.json")
      .then((res) => res.json())
      .then((imagePaths) => {
        if (!imagePaths.length) {
          setFinish(true);
          return;
        }

        let loadedCount = 0;

        imagePaths.forEach((src) => {
          const img = new Image();

          const handleLoad = () => {
            loadedCount++;
            if (loadedCount === imagePaths.length && !isCancelled) {
              setFinish(true);
            }
          };

          img.onload = handleLoad;
          img.onerror = handleLoad; // count errors too
          img.src = `/${src}`;
          console.log(`Loaded image from path /${src}`);
        });
      })
      .catch(() => {
        if (!isCancelled) setTimeout(() => { setFinish(true); }, 3000) // don’t block app on error
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
    
        <div style={{display: hasFinished ? 'none' : 'block'}}>

            <div className="d-flex justify-content-center align-items-center" style={{backgroundColor: 'black', width: '100vw', height: '100vh', overflow: 'hidden', position: 'fixed', zIndex: 9999, top: 0, left: 0}}>
                <h1 style={{color: 'white'}}>Carregando...</h1>
            </div>

        </div>

    </>
  )
}
