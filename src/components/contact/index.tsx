import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import isEmpty from 'validator/lib/isEmpty'
import isNumeric from 'validator/lib/isNumeric'
import isEmail from 'validator/lib/isEmail'
// import { ComponentProps } from '../props'
import Spacer from '../../core/spacer'
import GroupContainer from '../../core/groupContainer'
import GroupInner from '../../core/groupInner'
import GroupTitle from '../../core/groupTitle'
import FilledButton from '../../core/filledButton'
import ContactList from './contactList'
import ContactListItem from './contactListItem'
import ContactFetchModal from './contactFetchModal'

const Contact = () => {
  const [companyName, setCompanyName] = useState<string>('')
  const [department, setDepartment] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [fetching, setFetching] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [openModal, setOpenModal] = useState<boolean>(false)

  const validate = useCallback(async ({ email, message, name, phoneNumber }) => {
    if (isEmpty(name)) {
      return { result: false, message: '名前を入力してください' }
    }

    if (isEmpty(email)) {
      return { result: false, message: 'メールアドレスを入力してください' }
    }

    if (!isEmail(email)) {
      return { result: false, message: '正しいメールアドレスを入力してください' }
    }

    if (isEmpty(phoneNumber)) {
      return { result: false, message: '電話番号を入力してください' }
    }

    if (!isNumeric(phoneNumber)) {
      return { result: false, message: '電話番号は数字のみで入力してください' }
    }

    if (isEmpty(message)) {
      return { result: false, message: 'メッセージを入力してください' }
    }

    return { result: true, message: null }
  }, [])

  const onSubmit = useCallback(
    async ({ companyName, department, email, message, name, phoneNumber }) => {
      try {
        setFetching(true)
        setOpenModal(true)
        setErrorMessage('')

        const { result, message: validateMessage } = await validate({ companyName, department, email, message, name, phoneNumber })
        if (!result) {
          setErrorMessage(validateMessage ?? '')
          setSuccess(false)
          setFetching(false)
          return
        }

        // const value: CreateContact = {
        //   companyName,
        //   department,
        //   name,
        //   email,
        //   phoneNumber,
        //   message,
        // }
        // await createContact(value)

        throw new Error('not prepare create contact function')

        setSuccess(true)
        setFetching(false)
      } catch (e) {
        console.warn(e)
        setErrorMessage('送信に失敗しました')
        setSuccess(false)
        setFetching(false)
      }
    },
    [validate]
  )

  return (
    <GroupContainer>
      <GroupInner>
        <GroupTitle>お問い合わせ</GroupTitle>
        <Spacer size="xl" />
        <ContactList>
          <ContactListItem label="会社名" value={companyName} onChangeText={setCompanyName} disabled={fetching} />
          <ContactListItem label="部署" value={department} onChangeText={setDepartment} disabled={fetching} />
          <ContactListItem label="名前" required={true} value={name} onChangeText={setName} disabled={fetching} />
          <ContactListItem label="メールアドレス" required={true} value={email} onChangeText={setEmail} disabled={fetching} />
          <ContactListItem label="電話番号" required={true} value={phoneNumber} onChangeText={setPhoneNumber} disabled={fetching} />
          <ContactListItem label="メッセージ" required={true} value={message} onChangeText={setMessage} multiple={true} rows={6} disabled={fetching} />
        </ContactList>
        <Spacer size="xl" />

        <FilledButton text="送信する" size="l" onClick={() => onSubmit({ companyName, department, email, message, name, phoneNumber })} disabled={fetching} />
      </GroupInner>

      <ContactFetchModal open={openModal} onClose={() => setOpenModal(false)} fetching={true} success={success} error={errorMessage} />
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
