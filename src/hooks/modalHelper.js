import { useState } from 'react';

function useModalStatus() {
  const  [modalContent,setModalContent] = useState(null); // {key: "edit", value: 1}
  return [modalContent,setModalContent];
}

export default useModalStatus;