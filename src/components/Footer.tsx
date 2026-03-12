export function Footer() {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} Laíla · Product Designer.</p>
      <div className="app-footer-links">
        <a href="#" aria-label="View Dribbble profile">
          Dribbble
        </a>
        <a href="#" aria-label="View Behance profile">
          Behance
        </a>
        <a href="#" aria-label="View LinkedIn profile">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
