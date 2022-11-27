import { useForm } from 'react-hook-form';

import useAddBattery from '../../../hooks/Business/useAddBattery';
import useSnackBar from '../../../hooks/commons/useSnackBar';
import SnackBar from '../../@commons/SnackBar/SnackBar';

const InputForm = () => {
  const { addMutate, setIsAddMode } = useAddBattery();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'all' });
  const { openSnackBar, isActive, message } = useSnackBar();

  const onValidHandler = (data) => {
    const message = '유효성이 일치합니다';
    openSnackBar(message);

    const body = {
      //mock서버로 보내는 임시 데이터
      status: true,
      // status: Math.random() > 0.5 ? true : false,
      photoURL: '',
      // batteryId: Math.random(),
      ...data,
      stationID: 1,
    };
    console.log('입력폼 data는', body);
    addMutate(body);
    reset();
    setIsAddMode(false);
  };

  const onInvalidHandler = (errors) => {
    console.log(errors.capacity);
    const message = `${
      errors.capacity ? `capacity : ${errors.capacity.message}` : ''
    } 
    ${errors.price ? `price : ${errors.price.message}` : ''}
    ${errors.stationId ? `stationId : ${errors.stationId.message}` : ''}`;

    openSnackBar(message);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValidHandler, onInvalidHandler)}>
        <div>
          <label htmlFor='capacity'>배터리종류</label>
          <input
            id='capacity'
            type='number'
            placeholder='배터리 용량을 입력하세요'
            {...register('capacity', {
              required: '미입력',
              min: { value: 1, message: '1이상 입력하세요' },
            })}
          />
        </div>
        <div className='error-box'>{errors?.capacity?.message}</div>
        <div>
          <label htmlFor='price'>배터리금액</label>
          <input
            id='price'
            type='number'
            placeholder='대여 금액을 입력하세요'
            {...register('price', {
              required: '미입력',
              min: { value: 1, message: '1이상 입력하세요' },
            })}
          />
        </div>
        <div className='error-box'>{errors?.price?.message}</div>
        <div>
          <label htmlFor='stationId'>주유소위치</label>
          <select
            defaultValue='default'
            {...register('stationId', {
              required: true,
              validate: {
                isValuedStation: (input) => {
                  return input !== 'default' || '미입력';
                },
              },
            })}
          >
            <option value='default' disabled>
              선택
            </option>
            <option value='1'>1번주유소</option>
            <option value='2'>2번주유소</option>
            <option value='3'>3번주유소</option>
            <option value='4'>4번주유소</option>
            <option value='5'>5번주유소</option>
          </select>
        </div>
        <div className='error-box'>{errors?.stationId?.message}</div>
        <div className='submit-container'>
          <input type='submit' />
        </div>
      </form>
      <SnackBar isActive={isActive} message={message} />
    </>
  );
};

export default InputForm;

// {
//   "capacity":"50000mA",
//   "status":true,
//   "price":25000,
//   "photoURL":"http://asdfqwer111",
//   "stationId":1
// }
