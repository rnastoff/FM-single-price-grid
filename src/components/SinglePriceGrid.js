import styles from './SinglePriceGrid.module.css';

import Card from './Card';

const SinglePriceGrid = () => {
  return (
    <Card>
      <div className={styles.join}>
        <h1>Join our community</h1>
        <h2>30-day, hassle-free money back guarantee</h2>
        <p>Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing
          their skills.
        </p>
      </div>

      <div className={styles.details}>
        <div className={styles.detailsMonthly}>
          <h3>Monthly Subscription</h3>
          <div className={styles.price}>$29<span>per month</span></div>
          <p>Full access for less that $1 a day</p>
          <button>Sign up</button>
        </div>

        <div className={styles.detailsWhy}>
          <h3>Why Us</h3>
          <p>Tutorials by industry experts</p>
          <p>Peer & expert code review</p>
          <p>Coding exercises</p>
          <p>Access to our Github repos</p>
          <p>Community forum</p>
          <p>Flashcard decks</p>
          <p>New videos every week</p>
        </div>
      </div>
    </Card>
  )
}

export default SinglePriceGrid;