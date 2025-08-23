import ThumbnailGenerator from "@/components/tools/thumbnail-generator/ThumbnailGenerator";

export default function Content() {
  return (
    <div className="pt-12 flex flex-col items-center">
      <h2 className="mb-8 text-4xl font-semibold text-center">
        Generate <span className="text-gradient">Viral Thumbnails</span>
      </h2>

      <ThumbnailGenerator />
    </div>
  );
}
