function Folders({folderDivRef}: {folderDivRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div className="fixed text-white">
      <div ref={folderDivRef} className="w-[120px]">
        <img src="/folder.png" alt="folder" />
        <p className="text-center text-lg">Placeholder</p>
      </div>
      <div className="w-[120px]">
        <img src="/folder.png" alt="folder" />
        <p className="text-center text-lg">Projectek</p>
      </div>
    </div>
  );
}
export default Folders;
