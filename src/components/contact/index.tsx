import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { ComponentProps } from '../props'
import isEmpty from 'validator/lib/isEmpty'
import Spacer from '../../core/spacer'
import GroupContainer from '../../core/groupContainer'
import GroupInner from '../../core/groupInner'
import GroupTitle from '../../core/groupTitle'
import FilledButton from '../../core/filledButton'
import ContactList from './contactList'
import ContactListItem from './contactListItem'
import ContactFetchModal from './contactFetchModal'

type Form = {
  [key: string]: string
}

const initialForm: Form = {
  message: '',
}

const Contact = ({ sections, preview = false, onSend }: ComponentProps) => {
  const [fetching, setFetching] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [openModal, setOpenModal] = useState<boolean>(false)

  const [form, setForm] = useState<Form>(initialForm)

  const onChangeFormData = useCallback((key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }, [])

  const validate = useCallback(async () => {
    const keys = sections.map((_, index) => `item${index}`)

    let result = true
    let message = ''
    keys.forEach((key, index) => {
      if (isEmpty(message) && isEmpty(form[key] ?? '')) {
        const label = sections[index].fields.label.value
        message = `${label}を入力してください`
        result = false
      }
    })

    if (isEmpty(message) && isEmpty(form.message)) {
      message = `メッセージを入力してください`
      result = false
    }

    return { result, message }
  }, [form, sections])

  const onSubmit = useCallback(async () => {
    try {
      if (preview || !onSend) return
      setFetching(true)
      setOpenModal(true)
      setErrorMessage('')

      const { result, message: validateMessage } = await validate()
      if (!result) {
        setErrorMessage(validateMessage ?? '')
        setSuccess(false)
        setFetching(false)
        return
      }

      const value: { [key: string]: string } = { message: form.message }
      const keys = sections.map((_, index) => `item${index}`)
      keys.forEach((key) => {
        value[key] = form[key]
      })

      await onSend(value)

      setSuccess(true)
      setFetching(false)
    } catch (e) {
      console.warn(e)
      setErrorMessage('送信に失敗しました')
      setSuccess(false)
      setFetching(false)
    }
  }, [form, onSend, preview, sections, validate])

  return (
    <GroupContainer>
      <GroupInner>
        <GroupTitle>お問い合わせ</GroupTitle>
        <Spacer size="xl" />
        <ContactList>
          {sections.map((section, index) => {
            return (
              <ContactListItem
                key={index}
                label={section.fields.label.value}
                required={true}
                value={form[`item${index}`] || ''}
                onChangeText={(text) => onChangeFormData(`item${index}`, text)}
                disabled={fetching || preview}
              />
            )
          })}

          {/* TODO: 必須項目どうしようか.... */}
          <ContactListItem
            label="メッセージ"
            required={true}
            value={form.message}
            onChangeText={(text) => onChangeFormData('message', text)}
            multiple={true}
            rows={6}
            disabled={fetching || preview}
          />
        </ContactList>
        <Spacer size="xl" />

        <FilledButton text="送信する" size="l" onClick={onSubmit} disabled={fetching} />
      </GroupInner>

      <ContactFetchModal open={openModal} onClose={() => setOpenModal(false)} fetching={fetching} success={success} error={errorMessage} />
    </GroupContainer>
  )
}

const MissionText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.foregrounds.primary};
  white-space: pre-wrap;

  @media (min-width: 400px) {
    font-size: 36px;
  }
`

MissionText.defaultProps = {
  theme: {
    foregrounds: {
      primary: '#404040',
    },
  },
}

const MissionDetailText = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.foregrounds.secondary};
  white-space: pre-wrap;

  @media (min-width: 400px) {
    font-size: 18px;
  }
`

MissionDetailText.defaultProps = {
  theme: {
    foregrounds: {
      secondary: '#696969',
    },
  },
}

export default Contact
