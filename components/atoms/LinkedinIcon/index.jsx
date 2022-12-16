import styles from "./styles.module.scss";

export default function LinkedinIcon({ href }) {
  return (
      <a href={href} target="_blank">
        <svg
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.linkedinIcon}
        >
          <path
            d="M23.6875 3.9375H5.3125C4.82925 3.9375 4.4375 4.32925 4.4375 4.8125V23.1875C4.4375 23.6707 4.82925 24.0625 5.3125 24.0625H23.6875C24.1707 24.0625 24.5625 23.6707 24.5625 23.1875V4.8125C24.5625 4.32925 24.1707 3.9375 23.6875 3.9375Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.625 12.25V19.25"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.125 12.25V19.25"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.625 15.3125C13.625 14.5003 13.9477 13.7213 14.522 13.147C15.0963 12.5727 15.8753 12.25 16.6875 12.25C17.4997 12.25 18.2787 12.5727 18.853 13.147C19.4273 13.7213 19.75 14.5003 19.75 15.3125V19.25"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.125 10.0625C10.8499 10.0625 11.4375 9.47487 11.4375 8.75C11.4375 8.02513 10.8499 7.4375 10.125 7.4375C9.40013 7.4375 8.8125 8.02513 8.8125 8.75C8.8125 9.47487 9.40013 10.0625 10.125 10.0625Z"
            fill="black"
          />
        </svg>
      </a>
  );
}