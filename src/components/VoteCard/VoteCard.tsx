import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import ExcellaLogoLarge from './MedExcella.png'
import ExcellaLogoSmall from './TinyExcella.png'
import FlexView from 'react-flexview'
import { card, cardHeaderStyle, cardValue, logoImg } from './VoteCard.css'
import * as React from 'react'

interface IProps {
  value: string
  showValue: boolean
}

const VoteCard = ({ value, showValue }: IProps) => {
  let cardContent
  let cardHeader
  if (showValue) {
    cardContent = <CardContent className={cardValue}>{value}</CardContent>
    cardHeader = <img className={cardHeaderStyle} src={ExcellaLogoSmall} />
  } else {
    cardHeader = <CardHeader />
    // TODO: Need to add styling to make large Excella logo responsive
    cardContent = (
      <CardContent>
        <img className={logoImg} src={ExcellaLogoLarge} />
      </CardContent>
    )
  }

  return (
    <Card className={card}>
      <div>{cardHeader}</div>
      <FlexView hAlignContent="center" vAlignContent="center">
        {cardContent}
      </FlexView>
    </Card>
  )
}

export default VoteCard
