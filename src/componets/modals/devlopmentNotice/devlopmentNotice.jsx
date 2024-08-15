import { IoClose } from "react-icons/io5";
import { useDevelopmentNotice } from "../../../hooks/providers/useDevelopmentNotice";

const DevlopmentNotice = () => {
  const { noticeState, hideNotice } = useDevelopmentNotice();
  const onClose = () => {
    hideNotice();
  };
  return (
    noticeState?.show && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="fixed inset-0 bg-black/25 backdrop-blur-xl"
          onClick={onClose}
        />
        <div className="bg-white rounded-md shadow-lg overflow-y-auto overflow-x-hidden w-full max-w-md mx-4 relative custom-scrollbar">
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            <IoClose className="h-5 w-5" />
          </button>
          <div className="p-6 mt-3 text-center">
            <h2 className="text-2xl font-montserrat font-semibold mb-1">
              Under Development
            </h2>
            <p className="font-montserrat text-sm">
              This feature is currently under development. We are working hard
              to bring you new and exciting features. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default DevlopmentNotice;
