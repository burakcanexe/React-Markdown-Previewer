import { setTextState } from '../redux/textSlice';
import { useDispatch, useSelector } from 'react-redux';
import { input } from '../redux/textSlice';
function InputBox() {
  const dispatch = useDispatch();
  const inputText = useSelector(input);
  const clickHandler = (takeValue) => {
    dispatch(setTextState(takeValue));
  }
  return (
    <div className='inputBox'>
      <textarea value={inputText} onChange={(e) => clickHandler(e.target.value)} defaultValue={" "} />
    </div>
  );
}

export default InputBox;
