# React-Native Card

## Installation

```shell
npm install --save react-native-card-mb
```

## Importing

```js
import { Card } from "react-native-card-mb";
```

## Usage

```js
<Card
  disabled={false}
  onPress={() => alert("React-Native Card")}
  children={
    <View>
      <Text>React-Native Card</Text>
    </View>
  }
  cardContainterStyle={{ height: 50, borderRadius: 10 }}
/>
```
