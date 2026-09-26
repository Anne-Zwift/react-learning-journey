import { useNavigate } from "@tanstack/react-router";
import Styles from './InfoPage.module.css'

function InfoPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Info</h1>
      <p>This is your Info Page</p>
      <button className={Styles.buttonStyle} onClick={() => navigate({ to: '/' })}>Back to Welcome Page</button>
    </div>
  );
}

export default InfoPage;