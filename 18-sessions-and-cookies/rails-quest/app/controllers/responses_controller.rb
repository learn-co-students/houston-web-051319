class ResponsesController < ApplicationController

    def new
        @number_correct = session[:number_correct]
        @message = flash[:message]
        @question = Question.order("RANDOM()").limit(1)[0]
        @question_response = Response.new({ question: @question })
    end

    def create
        if(session[:number_correct])
            @number_correct = session[:number_correct]
        else
            @number_correct = 0
        end
        response = Response.create(response_params)
        if response.question.correct_answer == response.answer
            @number_correct = @number_correct + 1
            @message = "Correct"
        else
            @message = "Incorrect"
        end

        flash[:message] = @message
        session[:number_correct] = @number_correct

        puts "Correct so far: #{@number_correct}"
        redirect_to '/random-question'
    end

    def response_params
        params.require(:response).permit(:answer_id, :question_id)
    end

end
