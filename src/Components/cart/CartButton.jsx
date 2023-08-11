import React from 'react'
import Styles from "./Styles.module.css"
import {BiCartAlt} from 'react-icons/bi'

function CartButton(props) {
  return (
    <div className={Styles.CartButton1}>
<button>
    <span><BiCartAlt/> </span>
    <span>Cart </span>
    <span>{`${props.totalCartNumber}`}
</span>
    </button>


    </div>
  )
}

export default CartButton