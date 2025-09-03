import { X } from "lucide-react";
import { Input } from "./input";

interface OpenmodelPropps {
  open: boolean;
  onClose: () => void;
}

export function CreateContent({ open, onClose }: OpenmodelPropps) {
  if (!open) return null;

  return (
    <div onClick={()=>onClose()} 
     className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-xl p-6">
        <button
          onClick={onClose}
          className="absolute cursor-pointer  top-3 right-3 rounded-full bg-purple-600 text-white p-1 hover:bg-purple-700 transition">
          <X className="w-4 h-4" />
        </button>

        <h2 className="text-lg font-semibold text-gray-800 mb-4">Add New Content</h2>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-medium text-sm text-gray-700">Title</label>
            <Input placeholder="Enter title" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-sm text-gray-700">Link</label>
            <Input placeholder="Paste your link" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-sm text-gray-700">Brain-Type</label>
            <Input placeholder="Enter brain type (e.g. idea, note)" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-sm text-gray-700">Icon</label>
            <Input placeholder="Choose icon name (e.g. twitter, youtube)" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-sm text-gray-700">Tag</label>
            <Input placeholder="Add tags (comma separated)" />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-purple-600 text-white py-2 font-medium hover:bg-purple-700 transition">
            Save Content
          </button>
        </form>
      </div>
    </div>
  );
}
