// importação
import React, {Component} from 'react'
//cria uma classe do tipo Componente que pode ser utilizada externamente
export default class Calculadora extends Component{

    constructor(){
        //chama o construtor da classe componentes
        super()
        this.state = {
            //inicialização das variaveis
            // como as variáveis podem ser alteradas, elas precisam estar dentro do state = que é o estado da variável
            operando1: 1,
            operando2: 1,
            operador: '+',
            resultado: 1
        }
    }

    //função que altera o valor de oper1
    setOperando1(e){
        this.setState({
            operando1: Number(e.target.value)//valor do elemento HTML que sofreu a ação
        })
    }
    //função que altera o valor de oper2
    setOperando2(e){
        this.setState({
            operando2: Number(e.target.value) //valor do elemento HTML que sofreu a ação
        })
    }
    //função que altera o valor de operador
    setOperador(e){
        this.setState({
            operador: e.target.value //valor do elemento HTML que sofreu a ação
        })
    }
    //função que altera o valor do sexo
    setSexo(valor){
        this.setState({
            sexo: valor
        })
    }
    //função que opera
    opera() {
        var aux = this.state.sexo === "m" ? "Prezado senhor, o resultado é " :"Prezada senhora, o resultado é "
        
        switch(this.state.operador){
            case '+': this.setState({resultado : `${aux} ${this.state.operando1 + this.state.operando2}`})
                break
            case '-': this.setState({resultado : `${aux} ${this.state.operando1 - this.state.operando2}`})
                break
            case '*': this.setState({resultado : `${aux} ${this.state.operando1 * this.state.operando2}`})
                break
            case '/': if(this.state.operando2 !== 0){
                this.setState({resultado : `${aux} ${this.state.operando1 / this.state.operando2}`})
            } 
            else{
                this.setState({resultado: "impossível divisão por 0"})
            }
                break
            default: break //caso contrário
        }
    }
    //função que mostra ao usuário
    render (){
        return(
            <div>
                <h1>Projeto de calculadora</h1>
                <h2>{/*onChange quando o usuário digita na caixa de texto o estado da variável é alterado  */}
                    Operando 1: <input type="number" value={this.state.operando1}onChange={e => this.setOperando1(e)}/>
                </h2>
                <h2>{/*onChange quando o usuário digita na caixa de texto o estado da variável é alterado  */}
                    Operando 2: <input type="number" value={this.state.operando2} onChange={e => this.setOperando2(e)}/>
                </h2>
                <h2> {/*onChange quando o usuário digita na caixa de texto o estado da variável é alterado  */}
                    Operador: <select onChange={e => this.setOperador(e)}>
                        <option value='+'> + </option>
                        <option value='-'> - </option>
                        <option value='*'> * </option>
                        <option value='/'> / </option>
                        </select>
                </h2>
                <h2>
                    <button type='button' onClick={e => this.opera()}> Calcular</button>
                </h2>
                <h2>
                    Masculino <input type="radio" name="sexo" onClick={e => this.setSexo("m")}/>
                    Feminino  <input type="radio" name="sexo" onClick={e => this.setSexo("f")}/>
                </h2>
                <h2>
                    Resultado : {this.state.resultado}
                </h2>
            </div>
        )
    }
}