import styles from '../styles/Forms.module.css'

const Sidebar = () => {
  return (
    <>
      <div className={styles.bgColor}>
        <div className='px-3 py-3'>
          <h3>หมวดหนังสือ</h3>
          <ui className={styles.hide}>
            <li>- นิยาย</li>
            <li>- นิยายแปล</li>
            <li>- วรรณกรรม</li>
            <li>- หนังสือบทความ สารคดี</li>
            <li>- หนังสือเตรียมสอบ</li>
            <li>- การ์ตูน</li>
            <li>- หนังสือเด็ก</li>
            <li>- แม่และเด็ก</li>
            <li>- จิตวิทยา การพัฒนาตัวเอง</li>
            <li>- บริหาร ธุรกิจ</li>
            <li>- คอมพิวเตอร์</li>
            <li>- หนังสือท่องเที่ยว</li>
            <li>- ธรรมะ ศาสนาและปรัชญา</li>
            <li>- บ้านและสวน</li>
            <li>- สุขภาพ ความงาม</li>
            <li>- งานอดิเรก งานฝีมือ</li>
            <li>- หนังสือต่างประเทศ</li>
          </ui>
        </div>
      </div>
    </>
  )
}
export default Sidebar
