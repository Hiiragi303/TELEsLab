  /**
   * Small description of your action
   * @title The title displayed in the flow editor
   * @category Custom
   * @author Your_Name
   * @param {string} name - An example string variable
   * @param {any} value - Another Example value
   */
  const mapTag = async () => {
    const slotMappingByTag = {
      car: '車',
      iot: 'IoT',
      medical: '医療関係',
      weather: '環境',
      game: 'VR',
      ai: '人工知能',
      security: 'セキュリティ',
      infrastructure: 'インタラクション',
      design: 'デザイン系',
      planning: '設計系',
      app: 'Web',
      data: 'データ系'
    }
    const slotMappingByParams = {
      amount: '作業量',
      work: '就活支援度',
      study: '研究支援度',
      atmosphere: '雰囲気',
      growth: '成長性',
      eval: '合計'
    }
    const slotMappingByLabName = {
      semi_a: 'アメリカゼミ',
      semi_b: 'バチカンゼミ',
      semi_c: 'チャイナゼミ',
      semi_d: 'ドイツゼミ',
      semi_e: 'エクアドルゼミ',
      semi_f: 'フランスゼミ',
      semi_g: 'グアムゼミ',
      semi_h: '日本ゼミ'
    }

    const slots = event.nlu.slots
    for (let slot in slots) {
      if (slot in slotMappingByTag) {
        event.payload.tag = slotMappingByTag[slot]
      } else if (slot in slotMappingByParams) {
        event.payload.sortKey = slotMappingByParams[slot]
      } else if (slot in slotMappingByLabName) {
        event.payload.labName = slotMappingByLabName[slot]
      }
    }
  }

  return mapTag()