type ConfirmationModalProps = {
    isOpen: boolean;
    title?: string;
    message?: string;
    onConfirm: () => void;
    onCancel: () => void;
};

export default function ConfirmationModal({
    isOpen,
    title = "Are you sure?",
    message = "This action cannot be undone.",
    onConfirm,
    onCancel,
}: ConfirmationModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onCancel}></div>
            <div className="relative z-10 bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                <p className="mb-6 text-gray-700">{message}</p>
                <div className="flex justify-end space-x-3">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}
