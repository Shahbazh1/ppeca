declare module 'react-google-recaptcha' {
  import { Component } from 'react';

  interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    onExpired?: () => void;
    size?: 'compact' | 'normal' | 'invisible';
    theme?: 'light' | 'dark';
    type?: 'audio' | 'image';
    tabindex?: number;
    badge?: 'bottomright' | 'bottomleft' | 'inline';
    hl?: string;
  }

  export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {}
}
