import { toast } from 'react-hot-toast'
import { X, CheckCircle, Loader2 } from 'lucide-react' // Gunakan lucide-react untuk ikon

const useToast = () => {
  const showToast = (
    type: 'error' | 'loading' | 'success',
    message: string,
  ) => {
    let icon

    switch (type) {
      case 'error':
        icon = (
          <span className="p-1.5 rounded-full bg-white text-red-600">
            <X size={14} />
          </span>
        )
        toast.error(message, {
          duration: 4000,
          icon,
          style: {
            background: '#ff4d4d',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '8px',
            padding: '8px 16px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          },
        })
        break

      case 'success':
        icon = (
          <span className="p-1.5 rounded-full bg-white text-green-600">
            <CheckCircle size={14} />
          </span>
        )
        toast.success(message, {
          duration: 4000,
          icon,
          style: {
            background: '#4CAF50',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '8px',
            padding: '8px 16px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          },
        })
        break

      case 'loading':
        icon = (
          <span className="p-1.5 rounded-full bg-white text-blue-600">
            <Loader2 size={14} className="animate-spin" />
          </span>
        )
        toast.loading(message, {
          duration: 5000,
          icon,
          style: {
            background: '#2196F3',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '8px',
            padding: '8px 16px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          },
        })
        break

      default:
        console.warn('Unknown toast type:', type)
    }
  }

  return { showToast }
}

export default useToast
