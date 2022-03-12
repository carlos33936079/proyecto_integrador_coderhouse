import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTruck, faLocationDot, faMapLocationDot, faEarthAmericas, faArrowRotateLeft, faShield, faPercent} from '@fortawesome/free-solid-svg-icons'
import ItemCount from './ItemCount'


function ItemDetail(props) {

  let product= props.item


  return (
   
    <div className='itemDetail_container'>
      <div className='itemDetail_foto'>
        <img className='itemDetail_imagenfoto' src={product.image} alt="imagen" />
      </div>
      <div className='itemDetail_description'>
        <h2>{product.name}</h2>
        <br />
        <p className='itemDetail_description_precio'>${product.price}</p>
        <p className='itemDetail_description_cuota'>en {product.cuotas} x ${ Math.trunc( product.price / product.cuotas)} sin interés</p>
        
        <p className='itemDetail_description_mediosPago'>Ver los medios de pago</p>

        <ul>
        { props.loading ? "Cargando..." : product.description.map((desc, i)=>{
        return <li key={desc.toString()}>{desc}</li> })}
        </ul>

      </div>


      <div className='itemDetail_pago'>
        <div className='itemDetail_carrito'>
          <div className='itemDetail_carritoInfo'><h3><FontAwesomeIcon icon={faTruck}/> Llega gratis a:</h3>
            <p className='itemDetail_carritoIcon'><FontAwesomeIcon icon={faLocationDot}/> aqui va la direccion</p>
          </div>
                  <br />
          <div className='itemDetail_carritoInfo'><h3><FontAwesomeIcon icon={faEarthAmericas}/> Retira en:</h3>
            <p className='itemDetail_carritoIcon'><FontAwesomeIcon icon={faMapLocationDot}/> ver mapa</p>
          </div>
          <ItemCount  {...product}/>
        </div>
        <div className='itemDetail_button'>
          <button>Comprar ahora</button>
          <button>Agregar al carrito</button>
        </div>
        <div className='itemDetail_terminos'>
          <h3><FontAwesomeIcon className='icon_terminos' icon={faArrowRotateLeft}/> Devolucón gratis. </h3><p>Tenés 30 días desde que lo recibís.</p>
          <h3><FontAwesomeIcon className='icon_terminos' icon={faShield}/> Compra Protegida. </h3><p>Recibí el producto que esperabas o te devolvemos tu dinero.</p>
          <h3><FontAwesomeIcon className='icon_terminos' icon={faPercent} /> Descuentos. </h3><p>Promociones todos los días.</p>
        </div>
      </div>
      
    </div>
        
  )
}

export default ItemDetail