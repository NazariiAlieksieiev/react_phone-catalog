/* eslint-disable @typescript-eslint/dot-notation */
import React, { useState, useRef, useEffect } from 'react';
import style from './Dropdown.module.scss';

interface Props {
  title: string;
  params: string[] | number[];
}

export const Dropdown: React.FC<Props> = ({ title, params }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(params[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string | number) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={style['dropdown']} ref={dropdownRef}>
        <p className={style['dropdown__title']}>{title}</p>

        <div
          className={style['dropdown__active-option']}
          onClick={toggleDropdown}
        >
          <p className={style['dropdown__active-option-name']}>
            {selectedOption}
          </p>

          {isOpen ? (
            <button className={style['dropdown__show-options']}></button>
          ) : (
            <button className={style['dropdown__hide-options']}></button>
          )}
        </div>
        {isOpen && (
          <ul className={style['dropdown__options']}>
            {params.map(param => (
              <li
                className={style['dropdown__option']}
                onClick={() => handleOptionClick(param)}
                key={param}
              >
                {param}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
