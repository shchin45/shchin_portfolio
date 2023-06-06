import {init, send} from '@emailjs/browser';
import {CheckCircleIcon} from '@heroicons/react/24/outline';
import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  init('qejCJQDJawbY0KCgM');

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formDataObject = Object.fromEntries(new FormData(event.currentTarget));
      const serviceId = 'service_7gzrbc4';
      const templateId = 'template_vnu3ti6';
  
      try {
        await send(serviceId, templateId, formDataObject);
        console.log('Email sent successfully!');
        setIsEmailSent(true); 
      } catch (error) {
        console.error('Error sending email:', error);
      }
    },
    []
  );
  
  

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
<div className="flex items-center justify-start">
  <button
    aria-label="Submit contact form"
    className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
    type="submit"
  >
    Send Message
  </button>
  {isEmailSent && (
    <div className="flex items-center ml-5">
      <CheckCircleIcon className="h-4 w-4 text-orange-600" />
      <p className="text-orange-600 ml-1">Email sent successfully!</p>
    </div>
  )}
</div>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
