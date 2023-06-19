import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import {Avatar} from './Avatar.jsx'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
                <img className={styles.cover} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIkAzgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEHAP/EAEUQAAIBAwIDBgMGAwUGBQUAAAECAwAEERIhBTFBEyJRYXGBBjKRFEKhscHwI9HhFTM0UnIHFjVDc/FTYnSzwiQ2N4Ky/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAIxEAAgICAgIDAAMAAAAAAAAAAAECEQMhEjEiQQQTURRhcf/aAAwDAQACEQMRAD8AwiS9sutJJNY7sm22cnfJ8aCu5UmmWKWNy+rQ5OQwzjfHXlVltMkiPlkSBh3mwNIO+NsUJfQE8RjYa4UlYKZHQhV38fpWWMfJioJhc2940zy6wmlEJbVnxPsAB7+VTEjaw420rsxHX267UBxLCcRWAhmECjUNW5Y7sfbl7UT2uYkRJO65yIw/dA9PqK6a6DKipJ5ALkKQzPMoLEbDB50XYKz3SxkCORRiMEbEDmDQaWrtbSyldUUsjLqXcgg8vWrHnf7cZA3yx4Xb039etFoFbCgzRzNHJ3cY5DO2c7Grgkh77FcD5yBjffkP+/ShI7pntisyxuRhkJXdDtn2wOVXdrLFhCNOgYKlgfb9+VTkvQsgi3VmhUkllJ8OZ8frTawkzrSLWszDAKncH8KSQXWiJABgZx49c7j2prw45u7YPkd4ZbmB5nxrNksjNaN5w6aaCzXtJWllO5aTqeowPeucWunWzWVQCxGMK2+Tmoxq76opiB2RADkYDihL15bl5IlBxbsHXUAAcE9Og2686hkqSX6Zoq2Z+5M04eSdsBB8vNWA2xt7fWq7lbXsIBac1jHbal2DjO/pgg1bxuZhG7BFRl1AhAVB3B3z6AUpY/8APE4Qa9BTk2evL860QdxTKxVPQFL2aNbHZn7Z9R5httqIs4HEhLKTpkA1jPTn54O9DkapLMoFO5B6586tSRVeUOqsS+D5bcqvN60aDiSLo4QsqHSZSWyNnGrwxvyrR8EnUiSSNncvOXYKmeWVHTw/Oslay/8A1FiZE1JFlipz57bdDvWi4VFLZwxz9sw7WA5CrvvgkY8Dmo54+FBaD/iFknjihhP8WVgEQqV0tqXPM+vvWd43IrMyRwGJUu1LLg9Qo+u5+ooy/jYSWks0xEbzAr1Kg/kRtttSzj9wVaVuZjnL6cjbvA4yOuwzuaX48Ko5PZTwyN7i9LJnTAc41Ad5tuZ5bDn6VU8mjiU5A1dmDkLuGAO+SOY2phwRm+yFiqBWlBk/hgk6iTgnOcDHtQfFEVeJXyYSPMoVkiJIUAZPr4Vpi7m0N7IcOUCOcys+tImcEbjVjPpz39jRvC5X7E9m0v8ADhEh7v8AmJJBx45O9AWxK2F2uxjZcuzfcHdx68z9fOnnDLeSG7vYi4XRZKyoCCHXScAHpjJ9MV05UmxWKfgWGK44+e0CiMQOe+NjuMA/jVXxETJxFjJICQMHSdgcnYeVFfC9rrvAO1JZomHdQDI8d/bak/GpWW6JGk6gDsuOnh70Y7zNjJeVg6yOzLE5yuMop9+tNC01w0cmMwwIHZS+zlRkEjpyAJ9fCr4bKOORLjUj4OkkSdQPLntS3ik/Yofs8z9+TIU/8tRvseuTg58qrFpvQQWe3uJZe0VtUuNTb7nnk0dYkzwbJlowWBB2I6+vp5HwoKSeaUR5kJ7Ne6OWB1orhiRtcgShzE8bDIG+4x+FNLoZohZzyQxThBlXlGc+X7xXdRMh22EZz9RVrxR28IWNZVyQGEuAc4J/LFUKWYSMASAgG3PFJ7OokJWDBSOeB77VbLNr3Ct2nIknwqp0xIoYD5ga5cEhRjfPIe9CtisPjiyEwdRXdsjbFN+FBSy6rgQtq1CRhsmOR/IUrtYUC/OQ2obr1/Zp7wqGOSdHQFsNjLJkb9DyrJmkSkaOHiCymJpcthQGZcjPoCPX600nDzWzJAN9I1Y+7jGfWs/bK6yrpfJAy2/I55elM4rwLGOykAO4YD9+VYvkOknEzJUzKceSeOZEZkBGphliST7dcZoaCPs4R2zFmKAqoGoDOeuPSmnH8SkSSLhQN87sT5b7dKVzzvy2jjChVBxyrVik3BFEDROiCDAZu8QSpwaqicM7HGotLzxnGFxihY5dV1blCC2skluVSgkMMWonA7TxHP8AeK1SWi6iQjiZ5owHbSoA1A4O7YrV29xcRnsoVaQoFCKWyqb9fIgeFZbhzKL/AEABwFIXH+YU5inmS4RwXWSMfdwNWOh/KpZlemcwvjN06i1RgFfIcOV65X67ZrM8TuUksY49RM7u8kgOMKo5fn+FOuMyiaG0LaopNy7HcY7u+c+FZt1/gGR93uDhPEKDgfzp/jpcUwwHXCFueztggZgxDbKG1d7wznflSnikkicSmlPzMe+Cdt9x+tNrK6VIoRIOzXAAZQDtn+lIrnTc9pIpKa3yBp7oAG1UxvyYV2MkeSK2uoZG0oxhGnSMN+8UWLiGFOIFhkm3CKcDCNh8HPrjl4deqqaWS5IuJMnIQnzFRuZdYmIUKAAuB+tc4X2c0FcEuntr8SOyykRMRjPe5YHQ0F8RsRxSRFOyADkPADH4VOwme1kd1QoXQr3Sfc59RVE0gkm7QoqZycepzTxVTbD7OwSZkVGDBWHIHGGGc1TfyyyuEWYvGg0KrMMgbbfWr5omt77vkFO9IHXkTVMtl2TxyMMiT+IrLvq9s7e9PGrGLbawmmdkQKcIc4YHp5VbwwR3EyBlZhn+Jk7/AJ+Aojh5jcppcpcLkaSME+45bnrUh2K3HbqrsoIB17k433pJNu0crbOcUsy9nJJFG2BdNk6+WxweXTbf60CYza9osgzuuoZ2/f8AOurcySWsw0gJKRjbcjfH5VU76YCFJJLk46EAY3oxuqYaCYmU3SsM4Uqd98486hMTnUfvYwaCs5GIO3U0frMlyo5L2hHsMn8q5qmCgiKRAZAzEBtwc8van9ng27JE7dpqAQuwXP8AXlzpFaOigns48r/nHPx/KnCqi8OJ7fY4JTBPXOfoKx5VtIlNB0V1J2ahpcd3GkbkdM5o+CXRGqknQg1Oei+/1rPcLu/tF0qvh4o2JDuRkKNxv4elPby7UOsNqNMS7sMdKz5sThKv0z1QBxOQPI2rDaT4450tcaVVGUFiSWB3/fSibmWSVpJJM6SQEB2FB9t2ayGTRgnB3xqOOQ86pig6Q0exRHqS4gzlcZ2865I4ESoGwDMxY55ACoairo2TgMeucV8zJJohTIQZZjyB69a9BI1F/DnX7RNOuSg2BI6UbHcHtVZZhqG7FRyGOtKIS5jLI25Y6xy0jJ+vhVwcW+kh2Abbs9ssf5UssduxWrDeJ3ZuCtoJMpuzOdyB4e9CXkmowg91FbuHoNjXOzlgiaR0/iM3fY/vblVM6s2lQQe7qHntuaMYpaRyX4Xky/Z0BLtkd0KuRkn1qKyKvccMCOYK+2KpsyzuMFgF+Xkck8+flRggnCmTGIwvzA79BmuaSCDxF5LdogAyq+lSTjYcs0GdXalRsgbDeA9cUYpXQVkGdRyAQDq3rvYvKweIKc75XYA+BPjyp0xiu3aaJdJCnbUoJyAM8x4b0NNLqkZuRJOQOX750atm79ozMNKHJy2zb74PWlkgUYCnO2586Ko4fiDIi163XTkMZPPp++po+Xh0lzZF40YxZQDU2dKscZ9P5Uxv5p7BH02bxJED2bdnsMnABPmTRXBOLcNvrJkaIWtwm0iomAx8fA7+VYnknXJIfRl4BGjxxxsA8mVLCM7D/KfpXbu3kt4WDjWZSE3OSAM5rT/7uPK+eHXMBXPyYKE/zrsHBOI2kji6SKRWyuzEkD1x+8UfuitncH2jDyNmxCIxVdWWU++PQbVJAkaQvIx0cyQu4J8OmK2dhwKxjkmku0DrjT2TqcAD05nGKT8d4aHRorGNF5FVVTsBy28apHMpukCvQmuY4ZSCkQjCjSGV8k4Odx/SqdIFzoTUAVbOPMEfrR/DbG5lYJdI1urEBSRgnffHjV54bBFJIZC7LzwNtPqR/KqXWmctC7tXtW+UFzjJxkAfv860lleNJE1ukRCOhJfX8uPAEUsaG3DYyFXGwJzyx+80w+1Ilr9nbSGfSwQsBlajlT0uOznx9kUtI0ZRHeHB6aAGOPLOOlckmmV3OuLAb7x3bxxUYhHbzNNKgjjQEkEjJ8tv1qUN2t6Z1SNjpIyjdO6SDiuyX21ojNL8Fk0zzRhRqLMxAU8/ShuIxPHZOrzbo2RGu4z68uWaNuYzD39PaPnIIGwocrPxCHV9n0qE7PWinvHxOOtWjGtnJJC6MsItGnu6RualHGrqWZtT8yAM4o6z4bfzFoI4ykB+eRgBn671deWywy9j9kZTjdyoA9c/rTOVOhwGIyWsKkMO6M6dRznptXVDs3aHvFwNyeQ8PKiYeGQu7SOzdkeTnf8ADai24XiNQJZZYgMDfb+lBtHJIWx5kZjIe8M7D+dCTpMXGhG3JHqB1/OiJ7mO1kKtGwmibUoHy5HIY8Ksg4rLLE6tCcuNIKgnc9Pxoq1tINI7BHEI9MwkjAXYhSQf3muvK0MLSQFg2nGokAqPHxFFQ213KTbsTAFCk7FyfQch6e9XJwqwU5unvZOrFiF1Hz2/Wlco+xu1oTW1yslv/Ecgqe8UGWP6eO9VzzkoF0P2Z+Vnckn0AOBWl4U9rESbS37iPs2cn60yEyyzGeOOPtQpXUVwRnnvSPKk+jkjD27CRnlKYjT7xbJJzsM0PMWmkJChfEDatTxbhpuWEihUy2+lQFbzpOlmpdhoZsbEgY/DnVFkTVh4MffEXxPHe2k3Dfs8scpdGjkB2wCG9elIYbp0nDLnOMNtzplxq2ElsC8CxTRD+GuTqKnrvz/70jTL5yTkc8UzxKCqiakpO0aOw4jKzMNWgaCAQeR8accM+LJVQre6ZTGMNsRtWRtdQZSWw3Q/oavuuxEyvAW7RBlgD3D5Vknhi3Q6m10ay74vaXsa9nju97SoIIH58qRXCEzPLFpdVj1rlyMjy6fU770vl4gMKggGx+fO/pT2ztOH3PDpnjuCpnI7WOVCRkZ5EHan+PBY3T6Flye0MuFXFl9nQy3EBBXLSS9D69P6UlueI2VzxH7JYW6vGzsWePKaz12BGRUJ/g26iuBJa8PumiGWUMwAOffJ6Uzi4F2SI1zw42Ux7usgjUcZPI4xz59KsuC6YXbKrazh+0q0lgskIUoQ8hTbrz5nzoi4MtnDp4dNDZWykv2aAud+Z1HfG3IY96lFPCFcW0cblGK95d2IG+ATVcxtr1OxuYhHHIuCY9iNt9uXjU/5cl4voH8dN8kNLX4VlvbcQPfIiNHhxHY5C555Ov8ASk3EOEW3AL37G07XU8u6PCrI+jGMHc+dbD/eARzwvOsL2wYKVIIJPk2ce3I1mfjGwv8AiPE5OM8N1zJImgRYwYUHRfHPMnPM1p5YuPiZ4rM5Vk6E13wpcEqk6Rj/AMQEAfvzqNvaN9nCOGdeXar9w+frjlX0D8WggKyW9yAeohbf3xV0jQ3NoGuo3SYPh1B7MkY2bYj8qWFN7ZWdxqhXc2N7aMZ45piWbGiJGO3mf0xUPt10ZNF1ciEY0t2p5/vbwozsbWM64rq5UnOxYH3zV4jt5EbTbW76h87LqYegJ/SqfWmhXmp9CkXgivpdxIuAAdRwfTzouHifZzKqJjUTtnZvLHQ0PxXgV1Hdwta28YRkGO+F1H0P6V9YQK8qQ8UiYFWHcHM+GcVOWNeyidq0H3ckM8BkeyBb7p3wfLPKh4LmwtZc28Gl+eHO+eu1aSeYiLs5mKgnCwFcd0e9Df2ZZXQ70LxjGzIRyqelpjXfWxUvELx+zZopRBKwwwBC4zuaVHikMyuJ5LsFuYAUqT57inrcMuuGBzb3he1K50v93yxSwWUd7bS3UMgO/eQrn3HLaiox7OspS7a3hSOJgVHgRtTGLjyW0ZzA7YO7YyD44pBDwxXfCzx4zzzinn+7rC37t9DKSudKyA5GPWulji+w86Cbnjlncwx5ZjqOflKgEdCaYcHs4Fg7bWELjfVGd/PAo74V+G4uGwi4aMTzc+1cbKfBR+tc+IOL3EM6xK+OuC1ZpOK8YoZSlITQRXV1qa/nhRGwNMm7NtgHSMfjigrrg1jZ27SpfzyS8hqQAZ5b4398/WuSzSsumGOdnblgZ1egG/nS/iC8RuLsRLZ3SfdSMwsGIHLbGa2SlKe7Jxioi+5mjGRzYHp0oqK1vmtBdpEzxcjggv66eePPFXR/DnGHkz/Zk+ojk8egZ9TgU5sLLi1syrJw2VGQDPfAIHkM7+go3Gg7MsJneXswjF84K4wR7VufhxEgEVzMO6gBRWGfLOPHnQE3EoouJxniEBRgCqvLBuM4645UxkmhERa2kgbUBjTsMb+3SkyJNbCr9D/+3NTacsHP1xzpN8W8WVeGospJmE4MWliCDj9KpiWaaRNMe/MlmAH1oPjFlHcyJDxK5KBXzHIg1av/AC55eFT+qCkmFSdbAOFcRcRB2KvqzqyMDPUfqKvlvNPfDZOepql+GW9pBM0Esj6iGzJgAb4zt7+2aWmRl1doFTTzRzv7U/CDdnXJaNGLheIwqglYTAYAB7r+RqC/FU9rnh8Lsr6m1HTupI5ZrNQ3bxTLJbxtkMCAueflRnEoWg4nKbqIxXRbLk4wNv1yKVwj0zrZsPh+8nWJ1WUsQB3QflHSnJkjvF030QnC/wDic19DzFYPhHE5be9Z5M6WQjSpx4fXrTq345Ir6p1yo+Xs9jWWeOSeiyprY3l+HrKTVJAWhYnZHxpx64pfe/D15axmWzW1uG6DPeI9DjP1q5fiESEGGF9gcHkPSioeMj/mxOTzwpGw86eGbOqJzw4zPTWNzcTNccdutKMQOzDAP5bdBy6UxtfgS1ukS4s+JzaXGfukHy2A/mKI4obDijC0vEMJPdMnJzgg4GPfnmjhf8G4Dwuf7Hbjt44yUMkzd4jodyCfaq5M0p7jpiwxcVTMpxmCThfEI7Vo9VwQFRUJ3XxH72xQXEru/sbhbeYPGzKCq4+b0prFxU3M0d6x1sUwQELup8BgbD+lc4n8XxPE2lI30bgNGG73hvyp/sm6uIFjSumCQcNmvAhuriWXG+mNc6fQ/wBKLuLHh/DbRrqexuGd8qsjlhk+A6VOT4psuJ2OiOJo7pBq7q6N8dSBypTJx6/sZtTNI0bnHZuDob1BGDXNt6oCXsJ4LPdSK4NnEIAMdqyguT9N6ZQcKtba9W5KLKVGo4Uc/bwpenHPtbiKLhqW+mPI7NcDyIHLFXwvd3assLrG/JlYYB9/6V3+6BJNmuHEo+wCZ0jGcKN/pWE46Z769M8aDQcjGnfbkaJlfithh7mEiFT/AHiAsPc0qvLtnkJibSmSV0nYA9KhGDUrRSKVGh4Fxfh9lw+OOeLsGT52UZJPr6U7j43w+dQY5wY2GxOfz5V5oLgvcMyrIzMNtI39RUVgurIsexnDtlhkc/OrSwp+wKVHqb3sUaHGSpGxTBBpdLeK3cESnJ2GM4pfwCCKS3jg4hI6Xjbko2x64xyp2LKK3LBrdGB3MnZ7Y8TzrM4Ri+yqyf0Ip+J21tO6TqSTHrEijOd8Yx+NA8U4jNdW6xRRBoXOVcIMt4Vqr3gXD5wI3tEDOM64/vZ8xVNtwG3sVRYQFGdyw3PvVIyg0K5NPoQrcNBYiKO2ftBzUqRqPjVVyjy2LwnEhdTkE9fU8ulahoHhLOsbAD/Ly98V17aC4RdVqj5A1FeQqn2JE0rezzdIZYk7Od7hRqwYyoK11ExloXZgB1HIetb+b4csZdDKTE5J7w8/p+IpJd/Dskd1iLMoPNl2I/nU3msvFIq+EuGC5vBdz5MNsQ5CDdm5gZ9s1pPiaztZLZpdKPKRgPuHz4jbxp3wDhkY4XDFCiBVIDE464yxPjU7m0EvD7iZYFkt0b53iORnkV3H41lUZ5pclqjLLLUzyRINblUV00jBYMMVZ9mlUqJJZMHYd+nF/Nbds+hA0mc7qRgYJ32oOV87YwnlyJq32SNsVFoE+2xcPlQqZJZSe7qfuofPzo37e1uqNMiSNkMxC5Y/+bf+lL5IY27odUz904x7eFUfY3BDhimQcMrcxyP6/jVlKLWxJRlYyjupJgxz/DO4DAHG/LON/Wibt3uVRHZGVEXSNOPy50TbcC08TsuGxyD+NbROxJzjV4VG5tnWPtXI1yoroijxYjHtpqM+SdoZNVQGtx2V0RLnQp+VVx6cvaltzPayTMTw2OQZ5JO6n3HjTKS2eft5Je8ESPfTtkkKAT050Je2ccd32MIZgAo2Y86pCfFUxGrDLPiltE6R/Yex1kAs77KScZZj0qM/EY7rCPbQmPV/E7STYjPkaDvbVVRgoeORWwVLdRzpbJAyRrl3UHl+VNBxezndUa1J0uO/DOjAnd/6dKYHSYdRzI+MYL/vFebs01tJkEr59KKt+O3cPNyTVJYuW0ySdG6iuzDMOwM0aae8FkJyfTOKXcXWzupAz2zSS8y0bBCfXlSMfEGoKXY5zg7D9K4/FLSXa4KMRyOgn+dKsbTDyQxsLxbXSwMelR/mAqwXj385VGBjTvOdQOBWZWOLOAzsT4gAU0tGa1g7JV/guNTMMbmraqkhGnezScLRkyxGNOSgI3G45mtOlyVQPC6sD84/lWItb0qrKUZzju6T8w60xhvu+0lsGYOMYLZx546H0rFPG72WTVGle5haXGUhkC7q33h0wdqhNMBo0qrdSRJsKUW18Xl09qyaycJIu3Px/Yq6ThqSPrfGA2GKnGKTikFbCe2UNrMkgI3bBzRlvcZ1NbusmCMqGAxnxx+tDK0NtEVijZWTq2+3lvVMkkcnejkEZJ+YYJYe/PrXNpnLSGUTQqJHmHeDEDctkZ5iquKyx9hGkJYltzIp3Ujn50qUSwglSScjvg86Dk4jNNJlw+Sx7xGDj0oKFMc9F+D72Hi0cnbyXEd3aISCs2Ipg2wDLy6DpVPEeIR215dcMlEaQ20OpzK+GaQkEBAee5NBf7Poo7ye/MDskuhTHD2vMEnpjfBHM+NCfHtneSXt5eW6ns8/xkZQTGUGNsjlhh9M1vSbxJmGUY/bTENxxC2idQ0cbKrE6UOrtBhl3PTny8KzszawO6MjmSeZ8q+k/jyAKr9scliBuRgdPrSqcTK6ybuqndG21VkUOWjcmodGg4JY2s/ErdLyaJI5VJLPtp54H4VTeuBYQRyqir2kjRvyOMkEexH41m1uLgukZVhjbOM1e2nQhmaVlBb5zgDfpVfq1QHk3ZpLK6nl4nbXEQHaQxCNGB5YGkfnTEmXiZsbZlEb2K9kXA2kYE438yAPekfEney4y0BMYiUR/IN8aEzyr0FeK8P4ZwOae3giaDuFFz35HXSQfdga6GJu7eiWbJSXFbFMEEF/e31uLbe8W1VYT3QHYM34ECsKLmGLiKMxCCGRcrnwIOKey/EE8/Frm5iZIp5xB2bkZEJQAH6jNZ+cgqGLklgC2QKZ8X0DHGSuy7jEizXUsqE6JJWYZ3zk53oPW7qI9SEDoBirJZBLJEzDLYAJB59M1G4jQvnS2PXFItaZRFTglvlU4GPXyoaW0UsdKFf9JyKLDHmoXI5d6oICHJYAg+KkVRNoDSFr27q2CQT9K+FuwGCyD3phKW1nZCBzGKqOnOWTP+iqKbYnBH2oshZk7/iTyq6G7Kjs3BJJB3/CqBzHrXZPuep/OmiLLY0+0BSoXZmU4Kfdx/2rv2wmQF/mxuDuAByII5daAi+U/wCn+dWT8h6n9a5xTAmM4r11zGEEq53QnkfWiG4lGzAJJJHgbGRiMfvFJ+F/4ib/AKhrt9/fz+g/IVJwVjW6NTb3csyIHZnZOuNv3y6VaL+FmKnDSfeJTGPrSj4d/vv/ANhUr3/FH9+NRaXJoouhwJ4WfC6k07sNWdX0oVzZyE9hMEbzO3nt/Kl8nyn/AFD8qEm/vIv+l/8AI0eCsNmi4TeS2fFOH3FnIXuBPGkQD/MzdN8bHka3n+1thDBAZcqtwcSiM53IwPwBFeYL/jrD/rJ+a16h/tW/4Xbf6ov1rRhj4SM/yXUonmsfE0trmO406nAZX0j7hXTge1CSpHdW7yxtpjWQ6E5YBBOfwFC3n92PUVOP/A+4/I1lT0auNMDQqsq95j3t1Q/Nvyq1pB2MMIXVoTS2TzcsxyfYge1Ux/8AL/1VyD/Er6/rTHeyZkLXplHeyBz5s1N1hluoLa2Vox2cPaP/AKiNx674pVa809qZ8L/4iP8AVH//AEKaL3Qklrl+EePcHH9s/wBm2qNLOiqrAZBLEkn2wVHrS3iPDzYXk9rLJmSJ9B8Fx0r0Lhv/AOULv/0j/wDvLWD+MP8A7j4r/wCqP5Gryx1HRHHNudf0LYtWsrFpOfGuPr7QpPpjI6Y/Wqj/AIeP1oziXMen6VH2WKtK5bRgL1yOdX2to2lnhwygZbO4AoPp9afcH/4Zdei/k1JkbSHSTQnmk0TESkY6gDOKpTRJkhwm/iRmim/vJP30FUSdKoloRs//2Q==" alt="" />
                <Avatar className={styles.avatar} src="https://github.com/marcelo-ed.png" />
                <div className={styles.profile}>
                    <strong className={styles.userName}>Marcelo</strong>
                    <span className={styles.userProfession}>Programmer Student</span>
                </div>

                


                <footer>
                    <a href="">
                        < PencilLine  size={20}/>
                        Editar pefil
                    </a>
                </footer>
        </aside>
    )
}