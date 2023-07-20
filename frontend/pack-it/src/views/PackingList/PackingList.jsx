import { useParams } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
export const PackingList = () => {
  const params = useParams();
  const [packingList, setPackingList] = useState(null);
  // const { shoppingList, addToShoppingList } = useContext(ShoppingListContext)
  // const [isButtonClicked, setIsButtonClicked] = useState({});

  useEffect(() => {
    if (!params.id) return null;
    fetch(`http://localhost:3002/${params.id}/packingList`)
      .then((res) => res.json())
      .then((data) => {
        setPackingList(data);
        console.log('datadetails:', data);
      });
  }, [params.id]);

  //   if (![packingList]) {
  //     return <>loading...</>;
  //   } else {
  //   return{
  return (
    //   packingList?.map((item) => {
    //     return (
    //       <div class="form-check">
    //         <input
    //           class="form-check-input"
    //           type="checkbox"
    //           value=""
    //           id="defaultCheck1"
    //         //    {item.packed}? checked : null
    //         />
    //         <label class="form-check-label" for="defaultCheck1">
    //           {item.name}
    //         </label>
    //       </div>
    //     );
    //   })
    <Form>
      <Form.Group controlId="formBasicEmail">
          { packingList?.map((item) => {
         return (
            <Form.Check type="checkbox" label={item.name} />
         );
       })}
      </Form.Group>
    </Form>
  );
};
