import { Camera, CameraSlash, Trash } from 'phosphor-react-native'
import React from 'react'
import { 
  View,
  TouchableOpacity,
  Image
 } from 'react-native'
import { theme } from '../../theme'
import { styles } from './style'

interface Props {
  screenshot: string | null
  onTakeShot: () => void
  onRemoveShot: () => void
}

export function ScreenshotButton({ screenshot, onRemoveShot, onTakeShot }: Props) {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {
        screenshot 
          ? 
          <View>
            <Image 
              style={ styles.image }
              source={{uri: screenshot}}
            />
            <Trash 
            size={22} 
            color={theme.colors.text_secondary}
            style={styles.removeIcon}
            weight="fill"
          />
          </View>
          : 
          <Camera 
            size={24}
            color={theme.colors.text_primary}
            weight="bold"
          />
      }
    </TouchableOpacity>
  )
}

