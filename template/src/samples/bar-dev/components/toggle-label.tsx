import React, { FormEventHandler } from "react";
import styled from "styled-components";

interface Props {
  label: string; // 일반적인 라벨 텍스트
  labelSubstitute?: React.ReactNode; // 라벨을 대체할 수 있는 컴포넌트
  prefix: string; // id를 만들 때 사용할 접두사
  onChange?: FormEventHandler<HTMLInputElement>; // 토글 상태 변경 시 호출할 함수
  size?: number; // 사이즈 변경용 변수 1이 기본
  defaultChecked?: boolean; // 기본 체크 상태
}

const Toggle = (props: Props) => {
  const { label, labelSubstitute, prefix, onChange, size, defaultChecked } =
    props;

  const DynamicSpan = styled.span`
  position: absolute;
  inset-block-start: 0;
  inset-block-end: 0;
  inset-inline-start: 0;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  color: gray;
  transition: all 0.15s ease;
  margin: ${0.7 * 0.25 * (size ?? 1)}rem;
  width: 	${0.7 * 1.5 * (size ?? 1)}rem;
  height: ${0.7 * 1.5 * (size ?? 1)}rem;

  input:checked ~ & {
    inset-inline-start: ${0.7 * 1.5 * (size ?? 1)}rem;
    color: green;
  }
`;

  return (
    <div className="flex with-dark-bg-white rounded-lg p-2">
      <div className="flex flex-grow items-center justify-center">
        {labelSubstitute ? (
          labelSubstitute
        ) : (
          <p className="text-pretty text-sm with-dark-text-gray-700">{label}</p>
        )}
      </div>
      <div className="flex">
        <label
          htmlFor={`${prefix}-${label}`}
          className="relative inline-block cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
          style={{
            width: `${0.7 * 3.5 * (size ?? 1)}rem`,
            height: `${0.7 * 2 * (size ?? 1)}rem`,
          }}
        >
          <input
            type="checkbox"
            id={`${prefix}-${label}`}
            className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
            onChange={onChange}
            defaultChecked={defaultChecked ?? true}
          />

          <DynamicSpan>
            <svg
              data-unchecked-icon
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>

            <svg
              data-checked-icon
              xmlns="http://www.w3.org/2000/svg"
              className="hidden size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </DynamicSpan>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
